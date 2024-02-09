import './main.scss';
import { Banner } from './commercial-banner/banner';
import { Photo } from './photo/photo';

export const Main = () => {
    return(<div className="main">
        <Photo />
        <Banner />
    </div>);
}