import * as React from 'react';

interface TextProps {
    text: string;
}

function Text(props: TextProps) {
    if (props.text.startsWith('http')) {
        return <a href={props.text}>{props.text}</a>;
    }

    const lines = props.text
        .split('\n')
        .map((line, index) => <p key={index}>{line}</p>);
    return <>{lines}</>;
}

export default Text;
