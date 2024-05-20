
import { Text } from './Text';
import { Spacer } from './Spacer';
import  { type ReactNode, useMemo, useState, useEffect } from 'react';
import { Color, Space, Typography } from '../styles/variables';


const ContentDom: React.FC<{children: ReactNode, role: string}> = ({role, children}) => {
    return <section style={{"whiteSpace": "pre-line"}} role={role}>{children}</section>
  }
  
export const FooterContent = ({flag}: {flag: 'term' | 'question' | 'overview' | 'contact' | 'company' | 'none'}) => {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        const func = async() => {
        let path = "";
        let title = "";
        let text = "";
        switch(flag) {
          case 'none':
            break;
          case 'company':
            path = '/api/footer/company';
            title = "運営会社";
            break;
          case 'term':
            path =  '/api/footer/term';
            title = "利用規約";
            break;
          case 'contact':
            path =  '/api/footer/contact';
            title = "お問い合わせ";
            break;
          case 'overview':
            path =  '/api/footer/overview';
            title = "Cyber TOONとは";
            break;
          case 'question':
            path = '/api/footer/question';
            title = "Q&A";
        }
        if (path !== "") {
          const fetched = await fetch(path)
          const json = await fetched.json() as {data: string}
          console.log('json', json)
          text = json.data;
        }
        setTitle(title)
        setContent(text)
        }
        func()
      }, [flag])
    
    return (
    <ContentDom aria-labelledby={"companyDialogA11yId"} role="dialog">
    <Text as="h2" color={Color.MONO_100} id={"companyDialogA11yId"} typography={Typography.NORMAL16}>
      {title}
    </Text>
    <Spacer height={Space * 1} />
    <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12} overflowX='hidden' overflowY='scroll'>
      {content}
    </Text>
  </ContentDom>
  )
}