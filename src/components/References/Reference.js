import styles from './Reference.module.scss';

const References = ({referenceData, ...rest }) => {
    
    return(
        <div>
            {referenceData.map((reference)=>{
                return(
                    <div key={reference.referenceType}>
                        <h4>{reference.referenceType}</h4>
                        <ol>
                            {reference.sources.map((source)=>{
                               return( <li style={{fontWeight:"lighter"}} key={source.name}><a href={source.link}>{source.name}</a></li>)
                            })}
                        </ol>
                    </div>

                )
            })}
        </div>
    )
}

export default References;