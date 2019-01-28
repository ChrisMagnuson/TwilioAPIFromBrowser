let $APIRoot = "https://api.twilio.com"

const Mandatory = function ($ParameterName) {
    throw new Error(`The ${$ParameterName} parameter is mandatory`);
};

function ObjectPropertyIfVariableDefined ({
    $PropertyName,
    $Variable
}) {
    return (typeof $Variable !== 'undefined' && {[$PropertyName]: $Variable})
}

function InvokeTwilioAPIFunction ({
    $HttpMethod,
    $Resource,
    $SubResource,
    $Body,
    $Header,
    $SubResourceSid,
    $AccountSID,
    $AuthToken
}) {
    const $URL = GetTwilioApiURL(arguments[0]);

    // headers.set('Authorization', 'Basic ' + Buffer.from($AccountSID + ":" + $AuthToken).toString('base64'));

    return fetch(
        $URL,
        {
            method: $HttpMethod,
            ...(typeof $Body !== 'undefined' && {body: $Body}),
            credentials: 'include',
            headers: {
                "Authorization": `Basic ${btoa(`${$AccountSID}:${$AuthToken}`)}`
            }
            // ,
            // mode: "no-cors"
        }
    )
    // .then(response => {
    //     // if (!response.ok) {
    //     //     throw new Error(response.status);
    //     // }
    //     // return response.json();
    // })
}

function GetTwilioApiURL ({
    $Resource = Mandatory("Resource"),
    $SubResource,
    $SubResourceSid,
    $AccountSID

}) {
    if (! $SubResource ) {
        return $APIRoot + `/2010-04-01/${$Resource}.json`
    } else {
        if (! $SubResourceSid ) {
            return $APIRoot + `/2010-04-01/${$Resource}/${$AccountSID}/${$SubResource}.json?PageSize=350`
        } else { 
            return $APIRoot + `/2010-04-01/${$Resource}/${$AccountSID}/${$SubResource}/${$SubResourceSid}.json`
        }
    }
}

function GetTwilioIncomingPhoneNumbers () {
    return InvokeTwilioAPIFunction({$HttpMethod: "get", $Resource: "Accounts", $SubResource: "IncomingPhoneNumbers", $AccountSID: $AccountSID, $AuthToken: $AuthToken })
}

//InvokeTwilioAPIFunction ({$HttpMethod: "Post", $Resource: "Phone"})

    // if ($Debug) {
    //     Set-CertificatePolicy -TrustAllCerts
    // }
    
    // $Credential = Get-TwilioCredential


    // #$Response = if ($Header) {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI -Header $Header
    // #} else {
    // #    Invoke-RestMethod -Method $HttpMethod -Credential $Credential -Uri $URI
    // #}

