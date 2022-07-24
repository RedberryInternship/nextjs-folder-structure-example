import { FormWrapper, ImageWithQuote, ChessExperienceForm } from 'components';

const ChessExperience = () => {
  return (
    <>
      <ImageWithQuote
        imageSrc='/assets/chess-experience.png'
        quoteLineOne='"Many have become chess masters'
        quoteLineTwo=' No one has become the master of chess"'
        quoteAuthor='- Siegbert tarrasch'
        quoteAuthorAlignClass='self-rigtt'
        quoteMarginTopClass='mt-44'
      />
      <FormWrapper
        headerText='First Step Is Done, Continue To Finish Onboarding'
        pageName='Chess experience'
        pageDescription='This is basic information field'
        currentStep={2}
      >
        <ChessExperienceForm />
      </FormWrapper>
    </>
  );
};

export default ChessExperience;
