import "./Feedback.css";

const Feedback = () => {
    return (
        <section className="feedback">
            <p>We value Your opinnion and ideas. Therefore we are open to criticism and design/performance ideas which might be implemented in the future versions of this online store.</p>

            <form >
                <fieldset>
                    <legend>FINISH US!</legend>
                    <label htmlFor="description">Feedback</label>
                    <textarea></textarea>
                    <input type="submit" value="Send"/>
                </fieldset>

            </form>
            <img src="https://images.pushsquare.com/75da07cbb3f52/1280x720.jpg" />
        </section>
    );
}


export default Feedback;

