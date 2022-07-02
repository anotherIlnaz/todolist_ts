import { Form } from "../components/Form";
import {
   Container,
   FormContainer,
   ModeSwWrapper,
} from "../components/AuthPageStyles";
import { ModeSwitcher } from "../components/ModeSwitcher";

export const AuthPage = () => {
   return (
      <Container>
         <ModeSwWrapper>
            <ModeSwitcher />
         </ModeSwWrapper>

         <FormContainer>
            <Form />
         </FormContainer>
      </Container>
   );
};
