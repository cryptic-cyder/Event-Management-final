package com.dailycodebuffer.Springboot.tutorial.error;

public class DeptNotFoundException extends Exception{
    public DeptNotFoundException() {
        super();
    }

    public DeptNotFoundException(String message) {
        super(message);
    }

    public DeptNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeptNotFoundException(Throwable cause) {
        super(cause);
    }

    protected DeptNotFoundException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}