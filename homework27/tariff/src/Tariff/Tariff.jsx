
import style from './Tariff.scss'
import * as classnames from 'classnames'


export default function Tariff(props) {

    let { name,
        price,
        speed,
        tariff,
    } = props;



    let cleverCardName = classnames(
        {
            'bigCard': props.tariff == 'red',
            'card': props.tariff == 'black' || 'blue' || 'green',
        }
    )

    let cleverName = classnames(
        'name',
        {
            'name_blue': props.tariff == 'blue',
            'name_green': props.tariff == 'green',
            'name_red': props.tariff == 'red',
            'name_black': props.tariff == 'black'
        }
    )

    let cleverPrice = classnames(
        'price',
        {
            'price_blue': props.tariff == 'blue',
            'price_green': props.tariff == 'green',
            'price_red': props.tariff == 'red',
            'price_black': props.tariff == 'black'
        }
    )


    return (
        <div className={cleverCardName} >
            <div className={cleverName}>{name}</div>
            <div className={cleverPrice}>{price}<span className='rubInMonth'>руб/мес</span></div>
            <div className='speed'>{speed}</div>
            <p className='text'>Объем включенного <br /> трафика не ограничен</p>
        </div>
    )
}

