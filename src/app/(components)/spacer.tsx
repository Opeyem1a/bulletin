interface SpacerProps {
    height: `${number}px`
}

const Spacer = ({ height }: SpacerProps) => {
    return (
        <tr><td style={{height}}></td></tr>
    )
}

export { Spacer }