import React, { memo, useEffect } from 'react';

export interface MAlipayAutoSubmitProps {
  formHtml: string; // 后端返回的 form 字符串
}

const MAlipayAutoSubmit: React.FC<MAlipayAutoSubmitProps> = ({ formHtml }) => {
  useEffect(() => {
    // 1. 移除之前的表单
    const oldForm = document.getElementById('alipaysubmit');
    if (oldForm && oldForm.parentNode) {
      oldForm.parentNode.removeChild(oldForm);
    }

    // 2. 创建一个 div 容器，插入 form 字符串
    const div = document.createElement('div');
    div.innerHTML = formHtml;

    // 3. 获取 form 元素
    const form = div.querySelector(
      'form#alipaysubmit'
    ) as HTMLFormElement | null;
    if (form) {
      form.acceptCharset = 'UTF-8';
      document.body.appendChild(form);
      setTimeout(() => {
        form.submit();
      }, 100);
    }

    // 4. 卸载时
    return () => {
      const existForm = document.getElementById('alipaysubmit');
      if (existForm && existForm.parentNode) {
        existForm.parentNode.removeChild(existForm);
      }
    };
  }, [formHtml]);

  return null; // 这个组件不渲染任何内容
};

export default memo(MAlipayAutoSubmit);
