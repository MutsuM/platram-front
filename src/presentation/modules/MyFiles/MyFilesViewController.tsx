import React from 'react';
import MyFilesView from './MyFilesView';

const MyFilesViewController = () => {

    const [sectionTab, setSectionTab] = React.useState(false);
    const files = [1, 2, 3, 4, 5, 6];

    const changeTab = () => {
        setSectionTab(!sectionTab);
    }

    return <MyFilesView files={files} sectionTab={sectionTab} changeTab={changeTab}/>
}

export default MyFilesViewController;