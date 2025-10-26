export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="conainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font=bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl front-semibold">I am a passionate learner, educator, and tech enthusiast who loves 
                            exploring new technologies and sharing knowledge with others. </h3>
                        <p className="text-muted-foreground">
                            Currently a college student building practical experience across
                            web, backend, and game development. I've shipped front-end work with 
                            REACT, TypeScript, and TailwindCSS
                            and exercised with test driven tools in the MOCHA Framework. 
                            On the backend I write C# with EF Core and LINQ with solid 
                            foundational database best practices. 
                            I also have strong foundational skills in python
                            as well as game development with c++, GML, and c#, in unreal,
                            Game Maker Studios and Unitity.
                        </p>

                        <p className="text-muted-foreground">
                            Curiosity is my compass. I treat every problem as a classroom, experimenting, failing fast and documenting what matters 
                            so others can follow the same path witouth getting lost.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}