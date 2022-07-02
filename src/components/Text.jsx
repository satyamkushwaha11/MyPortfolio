import React from 'react'

const MyText = (props) => {
    const {
        className,
        textColor,
        textSize,
        children
    } = props
    console.log(textColor, 'llasdlfalsd');

    return (
        <div className={className} style={{ fontSize: textSize }}>
            <div>
                <span className='text-light mx-2'>  {children.split(' ')[0]}</span>

                <span className={`${textColor}`} >{children.split(' ')[1]}</span>
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