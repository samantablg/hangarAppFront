package com.company.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//TODO pendiente de configurar
public class HangarException {


    @ResponseStatus(value= HttpStatus.NOT_FOUND)
    private class HangarNotFoundException extends RuntimeException {

        private static final long serialVersionUID = 8253309007526137827L;

        public HangarNotFoundException() {
            super("There is not hangar");
        }

        public HangarNotFoundException(Long id) {
            super(String.format("The hangar %d doesn't exist", id));
        }
    }

    @ResponseStatus(value=HttpStatus.CONFLICT)
    public class HangarExistException extends RuntimeException {

        private static final long serialVersionUID = -2343578248323481893L;

        public HangarExistException() {
            super("Hangar already exist");
        }

        public HangarExistException(Long id) {
            super(String.format("The hangar %d already exist", id));
        }
    }
}
