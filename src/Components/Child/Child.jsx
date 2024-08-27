import React from 'react'

export default function Child({ candidate, searched, filtered }) {


    function highlightText(text) {

        if (text == candidate.name) {
            if (!searched[0]) return text;

            text = text.toLowerCase();
            text = text.split("").map((y) => searched[0].toLowerCase().includes(y) ? <span className='bg-info'>{y}</span> : y);

            return text;

        } else if (text == candidate.email) {
            if (!searched[1]) return text;

            text = text.toLowerCase();
            text = text.split("").map((y) => searched[1].toLowerCase().includes(y) ? <span className='bg-info'>{y}</span> : y);

            return text;

        } else if (text == candidate.company.name) {
            if (!searched[2]) return text;

            text = text.toLowerCase();
            text = text.split("").map((y) => searched[2].toLowerCase().includes(y) ? <span className='bg-info'>{y}</span> : y);

            return text;
        } else {
            if (!searched[3]) return text;

            text = text.toLowerCase();
            text = text.split("").map((y) => searched[3].toLowerCase().includes(y) ? <span className='bg-info'>{y}</span> : y);

            return text;
        }

    };

    return <>

        <tr>
            <td>{highlightText(candidate.name)}</td>
            <td>{highlightText(candidate.email)}</td>
            <td>{highlightText(candidate.company.name)}</td>
            <td>{highlightText(candidate.address.city)}</td>
        </tr>
        

    </>
}
