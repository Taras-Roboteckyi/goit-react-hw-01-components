import styled from 'styled-components';

export const ContainerFriends = styled.div`
    border-width:1;
    border-color: rgb(190,190,190);
    border-style: solid;
 margin-bottom: 30px;
 width: 300px;
 text-align: center;

    
`

export const FriendListStyle = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
padding: 10px 20px;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px 4px 4px 4px;
    
    
    :not(:last-child) {
        margin-bottom: 15px;
    }
`

export const Status = styled.span`
  margin-right: 10px;
    width: 10px;
    height: 10px;
    border: 1px solid green;
    border-radius: 50%;
    background-color: ${(props) => {
       // console.log(props)
        return props.children ? `red` : `green`
    }};
`

export const Avatar = styled.img`
margin-right: 10px;
`

export const Name = styled.p`
font-weight: 700;
`