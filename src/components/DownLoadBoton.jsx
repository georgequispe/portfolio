import { Button } from './Cv.styles';

const DownloadButton = ({ url, label }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Button>{label}</Button>
  </a>
);



export default DownloadButton;