import styled from 'styled-components'

export const IMAGE = styled.img`
        width:100%;
        object-fit:cover;
        max-height:${props => {
        if (props.size === 'small')
                return '450px;'
        if (props.size === 'medium')
                return '600px;'
        else return '750px'
}};
`