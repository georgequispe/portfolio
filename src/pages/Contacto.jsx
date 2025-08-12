import { FormContainer, Title, StyledForm, Label, Input, Textarea, Button } from './Contacto.styles';
const  ContactForm = () =>{
  return (
    <FormContainer>
      <Title>Contacto</Title>
      <StyledForm action="https://formspree.io/f/meojyjlg" method="POST">
        <Label htmlFor="nombre">Nombre</Label>
        <Input type="text" name="nombre" id="nombre" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" id="email" required />

        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea name="mensaje" id="mensaje" required />

        <Button type="submit">Enviar</Button>
      </StyledForm>
    </FormContainer>
  );
}
export default ContactForm;

