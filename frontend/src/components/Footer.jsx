import styled from "styled-components";
import { Facebook, Instagram, MailOutline, Pinterest, Twitter, Room, Phone, } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`;

const Desc = styled.p`
    margin:20px 0px;
`

const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color:whiite;
    background-color: #${(props) => props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom:30px;
`

const List = styled.ul`
    margin:0;
    padding;0;
    list-style: none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;

`
const Payment = styled.img`
width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>DPU</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook color="3B5999" />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram color="E4405F" />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter color="55ACEE" />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest color="E60023" />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Card</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
                </ContactItem>
                <Payment />
            </Right>
        </Container>
    )
}

export default Footer