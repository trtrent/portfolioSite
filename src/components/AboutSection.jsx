import { Code, User, Briefcase } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3>Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            I am currently employed at Insight Enterprises as an Associate Software Engineer,
                            developing and enhancing my skills in the full stack space.
                        </p>
                        <p className="text-muted-foreground">
                            I am passionate about learning about new technologies and techniques and enhancing
                            my skillset so I can become a seasoned and experienced developer!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="CV\TTrent_Insight_Brand_Resume.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover-bg-primary/10 transition-colors duration-300">
                                View My CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> {/* Circle for Icon */}
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">Web Development</h4>
                                        <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> {/* Circle for Icon */}
                                    <User className="h-6 w-6 text-primary"></User>
                                </div>
                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10"> {/* Circle for Icon */}
                                    <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                                </div>
                                <div className="text-left">
                                        <h4 className="font-semibold text-lg">Experience</h4>
                                        <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                                    </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};