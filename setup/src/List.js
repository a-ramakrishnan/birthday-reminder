import React, {useState} from 'react';

const List = ({data}) => {
    const [birthdays, setBirthdays] = useState(data)

const alreadyWished = (id) => {
    let newBirthdays = birthdays.filter((user) => user.id !== id);
    setBirthdays(newBirthdays)

}

    const clearBirthdays = () => {
        console.log('Inside SetBirthdays')
        setBirthdays('')
    }

  return (
    <div>
        <h3>{birthdays.length} birthdays today</h3>
        {birthdays.length ?
            birthdays.map((person) => {
                return (
                    <div className="person" key={person.id}>
                        <img alt={person.name} src={person.image}/>
                        <div className="flex">
                            <h4>{person.name}</h4>
                            <h4>{person.age}</h4>
                            <button onClick={() => alreadyWished(person.id)}>Already Wished</button>
                        </div>

                    </div>
                )
            })
            :
        ''}
        <button onClick={()=> clearBirthdays()}>Clear </button>
    </div>
  );
};

export default List;


