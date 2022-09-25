import styled from "styled-components";


export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 20px;
  
  


 header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #F4EDE8;
    font-size: 20px;
    gap: 300px;

    margin-top: 20px;
}
 main{
    display: flex;
    
 }

 a svg{
    color: white;
    font-size: 25px;
    margin-left: 10px;
}
@media (max-width: 550px) {
  > header{
      gap: 90px;
   }
   
}  
  
`
export const ContainerCard = styled.div`
  
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #F4EDE8;
  margin-top: 100px;
  gap: 50px;
`
export const Card = styled.div`
   width: 350px;
h3{
    font-size: 25px;
    margin-block: 10px;
} 

img{
    width: 100%;
    height: 300px;
    border-radius: 10px 10px 0 0 ;
    object-fit: cover;
 }
 p{
    text-align: end;
    font-weight: 800;
    border-bottom: 1px solid white;
    margin-top: 10px;
 }
 ul{
    text-align: end;
    list-style: none;
    margin-bottom: 10px;
 }
 
 
 div{
    display: flex;
    align-items: center;
    justify-content: center;

  >a{
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF8000;
    border-radius: 0 0 10px 10px;
    
    font-size: 20px;
    font-weight: 800;
    text-decoration: none;
    color: white;
    transition: 300ms;
}

 >a:hover{
    background-color: #FF9000;
 }

 @media (max-width: 370px) {
    width: 300px;

}

 
 }

`
