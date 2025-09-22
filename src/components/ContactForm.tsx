import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
      // 스팸 방지용 허니팟 필드(사용자는 보지 못함)
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error" | "info"; msg: string } | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env not configured.", { serviceId, templateId, publicKey });
      setNotice({ type: "error", msg: "메일 전송 설정이 되어 있지 않습니다. .env에 EmailJS 설정을 추가해주세요." });
      return;
    }

    // 플레이스홀더 값 사용시 빠르게 안내
    const looksLikePlaceholder = [serviceId, templateId, publicKey].some((v) => /your_/i.test(v));
    if (looksLikePlaceholder) {
      setNotice({ type: "error", msg: ".env의 EmailJS 값이 예시 값으로 남아 있습니다. 대시보드의 실제 ID/키로 교체하고 개발 서버를 재시작해주세요." });
      return;
    }

    try {
      // 허니팟: 값이 있으면 봇으로 판단하고 조용히 종료
      if (formData.website.trim()) return;
      setIsSubmitting(true);
      setNotice({ type: "info", msg: "메시지를 전송하는 중입니다…" });
      console.log('formData',formData)
      console.log('serviceId',serviceId)
      console.log('templateId',templateId)
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        { publicKey }
      );

      setNotice({ type: "success", msg: "메시지가 전송되었습니다. 곧 연락드리겠습니다." });
      setFormData({ name: '', email: '', message: '', website: '' });
    } catch (err) {
      console.error("Failed to send email", err);
      const detail = (err as any)?.text || (err as any)?.message || "네트워크/설정값을 확인해주세요.";
      setNotice({ type: "error", msg: `전송 실패: ${detail}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="dark-card p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What Are Clients Saying?</h3>
        <p className="text-muted-foreground text-sm">
          Get professional support and let's work together!
        </p>
      </div>
      {notice && (
        <Alert className="mb-4">
          <AlertDescription>{notice.msg}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              autoComplete="name"
              maxLength={80}
              className="bg-input-background border-border focus:border-white/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="hello@example.com"
              autoComplete="email"
              inputMode="email"
              maxLength={120}
              className="bg-input-background border-border focus:border-white/30"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell me about your project..."
            rows={4}
            maxLength={2000}
            className="bg-input-background border-border focus:border-white/30 resize-none"
          />
        </div>

        {/* Honeypot (시각적으로 숨김) */}
        <div aria-hidden="true" className="hidden">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black hover:bg-white/90 py-3 text-sm uppercase tracking-wider"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}