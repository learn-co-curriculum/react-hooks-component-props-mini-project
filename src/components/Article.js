function Article({title, date="January 1, 1970", preview, minutes}) {

    const coffeeOrBento = () => {
        if (minutes < 30) {
            const roundUp = Math.ceil(minutes/5) * 5;
            const coffeeNum = roundUp/5;
            let coffees = '';
            for (let i=0; i<coffeeNum; i++) {
                coffees = coffees+`☕`;
            }
            return ` ${'\u2022'} ${coffees} ${minutes} min read`
        } else {
            const roundUp = Math.ceil(minutes/10) * 10;
            const bentoNum = roundUp/10;
            let bentos = ''
            for (let i=0; i<bentoNum; i++) {
                bentos = bentos+`🍱`;
            }
            return ` ${'\u2022'} ${bentos} ${minutes} min read`
        }
    }

    return (
        <>
            <h3>{title}</h3>
            <small>{date}</small>
            <span>{coffeeOrBento()}</span>
            <p>{preview}</p>
        </>
    )
}

export default Article
