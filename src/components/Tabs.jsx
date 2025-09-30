export default function Tabs({ children, buttons, buttonsContainer }) {
  // ou colocar a prop começando com upper
  const ButtonContainer = buttonsContainer; 

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
