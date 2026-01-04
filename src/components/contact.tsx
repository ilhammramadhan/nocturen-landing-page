"use client";

import { Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log the data (in production, send to API)
      console.log("Form submitted:", data);

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });

      reset();
    } catch {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-card"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2
            id="contact-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Get in Touch
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question, feedback, or want to book a private event? We&apos;d
            love to hear from you.
          </p>
        </FadeIn>

        {/* Form Card */}
        <FadeIn delay={0.2}>
          <Card className="max-w-xl mx-auto bg-background border-border">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">
                Send us a message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-card"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-card"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-card"
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    aria-invalid={errors.subject ? "true" : "false"}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={5}
                    className="bg-card resize-none"
                    aria-describedby={errors.message ? "message-error" : undefined}
                    aria-invalid={errors.message ? "true" : "false"}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-sm text-destructive"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
