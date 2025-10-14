export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">    
                        <span className="opacity-0 animate-fade-in">Hello, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">Tyler</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">Kirchner</span>    
                    </h1>   
                    
                    <p> 
                        I'm a software developer who enjoys building fintech applications, 
                        developing scripts to simplify tasks, 
                        exploring game development, 
                        and learning new technologies. 
                        This is a snapshot of my journey so far!
                    </p>
                </div>
            </div>
        </section>
    );
}