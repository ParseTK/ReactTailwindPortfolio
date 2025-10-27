import { Headphones, Linkedin, Mail } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new projects, 
                creative ideas, 
                or opportunities to be part of your visions. 
                Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 text-left">
                        {" "}
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-left">Email</h4>
                                <a href="mailto:22parse22@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> 
                                    22parse22@gmail.com
                                </a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Linkedin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-left">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/parsetk" className="text-muted-foreground hover:text-primary transition-colors"> 
                                    ParseTK
                                </a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Headphones className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium text-left">Discord</h4>
                                <a 
                                    href="https://discordapp.com/users/estteekay#7458" 
                                    className="text-muted-foreground hover:text-primary transition-colors"> 
                                    estteekay
                                </a>
                            </div>
                        </div>
                    </div>    
                </div>
                                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    
                    <form className="space-y-6">
                        <div>
                            <label 
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                            >
                                {""}
                                Your Name</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounder-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Frodo Baggins"
                            />                        
                        </div>
                    </form>
                    </div> 
            </div>
        </div>
    </section>
  )
}