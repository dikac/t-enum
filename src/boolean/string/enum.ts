import Function from "@dikac/t-function/function-single";

export default function Enum<Value, Enumerate extends Record<string, Value>>(
    valid : boolean,
    value : unknown,
    enumerate : Enumerate,
    valueCast ?: Function<unknown, string>,
    enumerateCast ?: Function<Enumerate, string>,
) : string {

    let messages : string[] = [];

    messages.push('value');

    if(valueCast) {

        messages.push(valueCast(value));
    }

    messages.push('is');

    if(!valid) {

        messages.push('not');
    }

    messages.push('part of enum');

    if(enumerateCast) {

        messages.push(enumerateCast(enumerate));
    }

    return messages.join(' ');
}

