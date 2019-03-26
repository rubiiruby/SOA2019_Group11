package com.selection.campaign;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super("Not Found Entity");
    }

    public NotFoundException(Long message) {
        super("Not Found Entity <" + message + ">");
    }
}
