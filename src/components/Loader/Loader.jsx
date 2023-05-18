import { Dna } from 'react-loader-spinner';
import { Overlay } from './loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />{' '}
    </Overlay>
  );
};
