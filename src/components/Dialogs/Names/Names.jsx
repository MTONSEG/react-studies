import cls from './Names.module.scss';
import NameItem from './NameItem/NameItem';

const Names = (props) => {

    let userData = [
        { id: 1, name: 'Maksym Savik' },
        { id: 2, name: 'Maksym Slesar' },
        { id: 3, name: 'Maksym Vycheslav Bomyus' },
        { id: 4, name: 'Armat Maksym Gukis' },
        { id: 5, name: 'Maksym Savik' },
        { id: 6, name: 'Artmat Maksym' },
    ];

    let userElements = userData
        .map(user => <NameItem id={user.id} name={user.name} />);
    

    return (
        <div className={cls.users}>
            {userElements}
        </div>
    );
}

export default Names;