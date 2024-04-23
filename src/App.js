import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function App() {
    return (
        <div>

            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={editor => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event) => {
                    console.log(event);
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />

        </div>
    )
}

export default App