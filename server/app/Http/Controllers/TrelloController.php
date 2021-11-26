<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class TrelloController extends Controller
{
    function getBoard()
    {
        $respones = Http::get(env('URL'));

        return response()->json($respones->json());
    }

    function createBoard(Request $request)
    {
        $boardName = $request->query('name');
        $boardDesc = $request->query('desc');

        $URL = (env("BASE_URL") . "1/boards/?name=${boardName}&desc=${boardDesc}&token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));

        $response = Http::post($URL);

        return response()->json($response);
    }
    function deleteBoard(Request $request)

    {
        $id = $request->query("id");
        $URL = (env("BASE_URL") . "1/boards/${id}?token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));
        $response = Http::delete($URL);
        return response($response);
    }

    function getSingleBoard(Request $request)
    {
        $id = $request->query("id");
        $URL = (env("BASE_URL") . "1/boards/${id}?token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));
        $response = Http::get($URL);
        return response($response);
    }


    function updateBoard(Request $request)
    {
        $id = $request->input('id');
        $name = $request->input('name');
        $desc = $request->input('desc');

        $URL = (env("BASE_URL") . "1/boards/${id}?name=${name}&desc=${desc}&token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));

        $response = Http::put($URL);

        return response($response);
    }



    function getLists(Request $request)
    {
        $id = $request->query('id');

        $URL = (env("BASE_URL") . "1/boards/${id}/lists?token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));
        $response = Http::get($URL);
        return response($response);
    }

    function createList(Request $request)
    {
        $idBoard = $request->query('idBoard');
        $name = $request->query('name');

        $URL = (env("BASE_URL") . "1/lists?name=${name}&idBoard=${idBoard}&token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));

        $response = Http::post($URL);

        return response($response);
    }

    function getCards(Request $request)
    {
        $id = $request->query('id');
   

        $URL = (env("BASE_URL") . "1/lists/${id}/cards?token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));

        $response = Http::get($URL);

        return response($response);
    }


    function createCard(Request $request)
    {
        $idList = $request->query('idList');
        $name = $request->query('name');


        $URL = (env("BASE_URL") . "1/cards?name=${name}&idList=${idList}&token=" . env("SECRET_TOKEN") . "&key=" . env("SECRET_KEY"));

        $response = Http::post($URL);

        return response($response);
    }
}
