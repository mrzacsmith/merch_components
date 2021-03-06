import Item from "./components/item/";// [ X ] isDynamic
import Container from './components/container'// [ NO ] isDynamic   CONTAINER IS A STATIC CONTAINER PLEASE OVERWITE with styled(Continer)
import Carousel from './components/carousel'// [ X ] isDynamic
import Navigation from './components/navigation'// [ X ] isDynamic
import Image from './components/image'// [ NO ] isDynamic IMAGE IS A STATIC ITEM, PLEASE OVERRIDE WITH styled(Image)
import Button from './components/button'  // [ X ] isDynamic
import ButtonGroup from './components/button-group' // [ NO ] isDynamic BUTTON GROUP TAKES IN ALL INTERCHANGEABLE ATTRS
import Header from './components/header' // [ X ] isDynamic
import Footer from './components/footer'// [ X ] isDynamic
import TextBanner from './components/text-banner'
import LinkBar from './components/link-bar'

import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
   *{
       user-select:none;
   }
   *:focus{
       outline:none;
   }
`


export {
    Item,
    Container,
    Carousel,
    Navigation,
    Image,
    Button,
    ButtonGroup,
    Header,
    Footer,
    TextBanner,
    LinkBar,
    Reset
};