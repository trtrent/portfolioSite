import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        var templateParams = {
            name: e.target.elements["name"].value,
            email: e.target.elements["email"].value,
            message: e.target.elements["message"].value
        };

        emailjs.send('service_54rv99v', 'template_bqd3ivp', templateParams).then(
            (reponse) => {
                console.log('SUCCESS', reponse.status, Response.text)
            },
            (error) => {
                console.log('FAILED', error)
            },
        );

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500);
    };

    emailjs.init({
        publicKey: '6JIE5y95De8FQ2reP',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {
            // Block the suspended emails
            list: [],
            // The variable contains the email address
            watchVariable: 'treytrent54@gmail.com',
        },
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Questions or comments? Feel free to reach out to me!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="grid grid-cols-1 gap-3">
                            <div className="mx-auto">
                                <div className="p-3 rounded-full bg-primary/10 space-x-4 flex items-start mb-4">
                                    <Mail className="h-6 text-primary"></Mail>
                                    <a href='mailto:treytrent54@gmail.com' className="text-muted-foreground ">treytrent54@gmail.com</a>
                                </div>
                                <div className="p-3 rounded-full bg-primary/10 space-x-4 flex items-start mb-4">
                                    <Phone className="h-6 text-primary"></Phone>
                                    <a href='tel:+14802994580' className="text-muted-foreground ">(480) - 299 - 4580</a>
                                </div>
                                <div className="p-3 rounded-full bg-primary/10 space-x-4 flex items-start mb-4">
                                    <MapPin className="h-6 text-primary"></MapPin>
                                    <a className="text-muted-foreground ">Chandler, AZ, United States</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5 mx-auto">
                            <h4 className="font-medium mb-4 text-2xl">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/trey-trent-10ba021a8/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                                    placeholder='Trey Trent...'
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary"
                                    placeholder='user@gmail.com...'
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus-ring-primary resize-none"
                                    placeholder='Type your message here...'
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",

                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}