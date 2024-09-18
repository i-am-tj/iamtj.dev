import { siteMetadata } from "@/data/siteMetadata";
import '../../../app/styles/logo.css';

const Logo = () => {
    return (
      <div className="text-l font-bold logo-container">
        <div className="gradient-text">{siteMetadata.logoText}</div>
      </div>
    );
};
  
export default Logo;