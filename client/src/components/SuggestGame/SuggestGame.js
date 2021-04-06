import "./SuggestGame.css"

const SuggestGame = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.description.value);

        
    };


    return (
        <section className="suggest-game">
            <h1>Here You can suggest a new game to be featured in our Katalog</h1>
            <p>After we review Your suggestion , we will take it in consideration and even deploy it as an option for our customers and fans</p>
            <img src="https://sm.ign.com/t/ign_ap/review/m/mortal-kom/mortal-kombat-11-shang-tsung-dlc-review_7755.1200.jpg" />
            <form action="mailto:lyubomir_vasilev1992@abv.bg" method="POST">
                <fieldset>
                    <legend>Suggest a New Game</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select type="text" name="category">
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="horror">Horror</option>
                                <option value="logical">Logical</option>
                                <option value="other">Other</option>
                            </select>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <input className="btn-suggest" type="submit" value="Suggest Game" />
                </fieldset>
            </form>
        </section>
    );
}

export default SuggestGame;