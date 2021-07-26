import React from 'react'

function Article({ title, date, preview, time }) {
    var timeElement;
    if (time < 30) {
        var cupsCount = Math.ceil(time / 5);
        timeElement = String.fromCodePoint("0x2615").repeat(cupsCount)
    }
    else{
        var bentoCount = Math.ceil(time / 10);
        console.log(bentoCount)
        timeElement = String.fromCodePoint('0x1F371').repeat(bentoCount)
    }

    //1F371

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small> &bull; {timeElement} {time} min read</small>
            <p>{preview}</p>
        </article>
    )
}

Article.defaultProps = {
    date: 'January 1, 1970'
};

export default Article
