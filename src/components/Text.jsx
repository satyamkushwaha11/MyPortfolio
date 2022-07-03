import React from 'react'

const MyText = (props) => {
    const {
        className,
        textColor,
        textSize,
        children
    } = props
    console.log(textColor, 'llasdlfalsd');
    const lastLetter=children.slice(children.indexOf(' ') + 1)
    const firstLetter=children.slice(0, children.indexOf(' '))
   

    return (
        <div className={className} style={{ fontSize: textSize }}>
            <div>
                <span className='text-light mx-2 text-uppercase'> {firstLetter}</span>

                <span className={`${textColor} text-uppercase`} >{lastLetter}</span>
            </div>
        </div>
    )
}

export default MyText
// export const MyResumeText = () => {
//     return (
//         <i class="fas fa-newspaper fa-3x" />
//     )
// }

// export const MyPortfolioText = () => {
//     return (
//         <i class="fas fa-toolbox fa-3x" />
//     )
// }

// export const ContactMeText = () => {
//     return (
//         <i class="fas fa-envelope fa-3x" />
//     )
// }