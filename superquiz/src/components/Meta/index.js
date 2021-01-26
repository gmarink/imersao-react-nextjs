import Head from 'next/head';
import db from '../../../db.json';

const Tag = ({title, description, url, bgimage}) => {
  return (
     
    <Head>
        <title>{title}</title>
<meta name="title" content={title}/>
<meta name="description" content={description}/>

<meta property="og:type" content="website"/>
<meta property="og:url" content={url}/>
<meta property="og:title" content={title}/>
<meta property="og:description" content={description}/>
<meta property="og:image" content={bgimage}/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content={description}/>
<meta property="twitter:title" content={title}/>
<meta property="twitter:description" content={description}/>
<meta property="twitter:image" content={bgimage}/>
   
</Head>
     
    
  )
}

export default Tag;