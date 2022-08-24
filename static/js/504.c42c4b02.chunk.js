"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[504],{3504:function(e,a,r){r.r(a),r.d(a,{default:function(){return b}});var s,n,i=r(5705),l=r(3284),o=r(6157),m=r(1128),d=r(5048),t=r(5822),c=r(168),u=r(6031),h=(0,u.ZP)(m.Z.Control)(s||(s=(0,c.Z)(["\n  width: 250px;\n  &.error {\n    border: 2px solid #ff6565;\n  }\n"]))),p=u.ZP.div(n||(n=(0,c.Z)(["\n  &.error-message {\n    color: #ff6565;\n    padding: 0.5em 0.2em;\n    height: 1em;\n    position: absolute;\n    font-size: 0.8em;\n  }\n"]))),w=r(3329),b=function(){var e=(0,d.I0)(),a=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"*Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan'").min(2,"*Name must have more than 2 characters").required("*Name is required"),email:l.Z_().email("*Must be a valid email address").required("*Email is required"),password:l.Z_().min(7,"*Password must have at least 7 characters").required("*Password is required")});return(0,w.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:a,onSubmit:function(a,r){var s=r.setSubmitting,n=r.resetForm;!function(a){var r=a.name,s=a.email,n=a.password;e(t.r.register({name:r,email:s,password:n}))}(a),s(!0),n(),s(!1)},children:function(e){var a=e.values,r=e.errors,s=e.touched,n=e.handleChange,i=e.handleSubmit,l=e.isSubmitting;return(0,w.jsxs)(m.Z,{name:"registration",noValidate:!0,onSubmit:i,children:[(0,w.jsxs)(m.Z.Group,{className:"mb-5",controlId:"formBasicName",children:[(0,w.jsx)(m.Z.Label,{children:"Name:"}),(0,w.jsx)(h,{type:"name",name:"name",placeholder:"Enter name",value:a.name,onChange:n,className:s.name&&r.name?"error":null,required:!0}),s.name&&r.name?(0,w.jsx)(p,{className:"error-message",children:r.name}):null]}),(0,w.jsxs)(m.Z.Group,{className:"mb-5",controlId:"formBasicEmail",children:[(0,w.jsx)(m.Z.Label,{children:"Email:"}),(0,w.jsx)(h,{type:"email",name:"email",placeholder:"Enter email",value:a.email,onChange:n,className:s.email&&r.email?"error":null,required:!0}),s.email&&r.email?(0,w.jsx)(p,{className:"error-message",children:r.email}):null]}),(0,w.jsxs)(m.Z.Group,{className:"mb-5",controlId:"formBasicPassword",children:[(0,w.jsx)(m.Z.Label,{children:"Password:"}),(0,w.jsx)(h,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:n,className:s.password&&r.password?"error":null,required:!0}),s.password&&r.password?(0,w.jsx)(p,{className:"error-message",children:r.password}):null]}),(0,w.jsx)(o.Z,{variant:"primary",type:"submit",disabled:l,children:"Register"})]})}})}}}]);
//# sourceMappingURL=504.c42c4b02.chunk.js.map