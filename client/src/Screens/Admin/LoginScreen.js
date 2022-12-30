import React from 'react'

const LoginScreen = () => {
    return (
        <div class="sidebar-layout">
            <div class="sidebar-body">
                <div class="side-logo mb-40">
                    <a href="/"><img src="/upload/logo.png" alt="logo" /></a>
                </div>
                <div class="login-group">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Enter your email address"/>
                        </div>
                        <div class="form-group">
                            <div class="pass-group">
                                <input type="password" class="form-control pass-input" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div class="d-grid login-pharmacy mb-25">
                            <button class="btn btn-primary btn-start" type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;