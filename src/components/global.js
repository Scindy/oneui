import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, div, dl, dt, dd, ul, ol, li, pre, form, fieldset, blockquote,i,button, input, label{
      padding:0;margin:0;list-style-type:none;font:normal 12px "Microsoft YaHei";word-break:break-all;}
           
    a{text-decoration:none;outline:none;}
    a:link, a:hover, a:active, a:visited{text-decoration:none;}
    a,button{transition: all 0.5s;cursor:pointer;}
    a:hover,button:hover{transition: all 0.5s;}
    h1,h2,h3,h4,h5,h6{margin:0;padding:0;}
    fieldset,img{border:none}
    ul, li, dl, dt, dd{list-style:none}
    ol>li{list-style:disc;margin-left:15px;}
    i{font-style:inherit;}
    img,input{vertical-align:middle;}
    table{border-collapse:collapse;border-spacing:0;}
    address, caption, cite, code, dfn, em, strong, th, var{font-style:normal;font-weight:normal;}
    caption, th{text-align:left;}
    q:before, q:after{content:'';}
    input,button,select,textarea{outline:none;box-sizing:border-box;}
    input{background:none;border:0;outline:none;}
    input:disabled{border:1px solid #ddd;background-color:#F5F5F5;color:#ACA899;}
    input[type="reset"]::-moz-focus-inner,
    input[type="button"]::-moz-focus-inner,
    input[type="submit"]::-moz-focus-inner,
    input[type="file"] > input[type="button"]::-moz-focus-inner{
        border:none;padding:0;
    }
   
`;
