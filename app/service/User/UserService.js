import ApiService from "../ApiService";

export default {
    async login(apiName, requestBody) {
        return ApiService.post(
          "user/" + apiName,
          requestBody,
        );
      },
}
