
const Hero = ( { 
    id,
    content: {
        text
    },
} ) => {

    return (
        <section id={id} className='hero-container'>
            <div className='hero-wrapper'>
                <div className='hero-text-wrapper'>
                    <h1>{text}</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;