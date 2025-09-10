import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "./hooks/use-toast";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "sumesharavind20@gmail.com",
            link: "mailto:sumesharavind20@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+91 6380841445",
            link: "tel:+91 6380841445"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Tenkasi,Tamilnadu, India",
            link: "#"
        }
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                            Let's Work Together
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold mb-8 text-foreground">Get in Touch</h3>

                            <div className="space-y-6 mb-8">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4 group">
                                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                                            <item.icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground">{item.title}</h4>
                                            <a
                                                href={item.link}
                                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                                            >
                                                {item.value}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="glass-card p-6 rounded-2xl">
                                <h4 className="text-lg font-semibold mb-4 text-foreground">Why Work With Me?</h4>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        Fast response time (within 24 hours)
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        Transparent communication throughout the project
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        Delivery on time and within budget
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                        Post-launch support and maintenance
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Card className="glass-card border-border/50">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                            className="bg-muted/50 border-border/50 focus:border-primary transition-colors duration-300" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="bg-muted/50 border-border/50 focus:border-primary transition-colors duration-300" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            className="bg-muted/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none" />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-hero border-0 text-primary-foreground hover:shadow-glow transition-all duration-300"
                                        size="lg"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;