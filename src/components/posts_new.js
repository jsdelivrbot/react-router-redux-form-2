import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions'

class PostsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;

        const divClassName = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={divClassName}>
                <label>{field.label}</label>
                <input
                    className='form-control text-help'
                    type='text'
                    {...field.input}
                    placeholder={touched ? error : ''}
                />
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name='title'
                    label='Title'
                    component={this.renderField}
                />
                <Field 
                    name='categories'
                    label='Categories'
                    component={this.renderField}
                />
                <Field 
                    name='content'
                    label='Content'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link className='btn btn-danger' to='/'>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title'
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories'
    }

    if (!values.content) {
        errors.content = 'Enter some content please'
    }

    return errors
}

PostsNew =  reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);

export default PostsNew;