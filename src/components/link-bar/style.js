import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const LINKBAR = styled.div`
    box-sizing:border-box;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-between;
    background:green;
    padding:2rem;
    ${props => {
        if (props.style) {

        }
    }}
`

export const LINK = styled.p`
    z-index:10;
  padding:1rem;
  color:black;
  ${props => {
        if (props.style) {

        }
    }}

`

export const PREVIEW = styled.iframe`
z-index: -1;
  border:none;
  border-radius:10px;
  width:100%;
  height:100%;
  position:absolute;
  overflow:hidden;
  pointer-events: none;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  top:0;
  left:0;
  ${props => {
        if (props.style) {

        }
    }}

`

export const LINKCARD = styled.div`
    position:relative;
  width:30%;
  background:lightgray;
  ${props => {
        if (props.style) {

        }
    }}

`